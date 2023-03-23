import { db } from "./firebase";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";

export const writeVote = async (credentials, options) => {
    const { studentID } = credentials

    const studentIDNumber = studentID * 1
    if (isNaN(studentIDNumber)) {
        const error = new Error("Invalid syntax");
        error.code = 400;
        throw error
    }
    
    const uniqueID = studentID

    const membershipDocRef = doc(db, "membership", uniqueID);
    const membershipSnapshot = await getDoc(membershipDocRef);
    if (!membershipSnapshot.exists()) {
        const error = new Error("User is not a member");
        error.code = 401;
        throw error;
    }

    const pollingDocRef = doc(db, process.env.REACT_APP_FIRESTORE_KEY, uniqueID);
    const pollingSnapshot = await getDoc(pollingDocRef);

    if (pollingSnapshot.exists()) {
        const error = new Error("User voted already");
        error.code = 409;
        throw error;
    } else {
        const { president, vicePresident, treasurer } = options;
        const createdAt = new Date();

        try {
            await setDoc(pollingDocRef, {
                studentIDNumber: studentID,
                president,
                vicePresident,
                treasurer,
                createdAt
            });
        } catch (error) {
            console.log("error writing the vote", error.message);
        }
    }

    return pollingDocRef;
}

export const countVotes = async () => {
    const voteResult = {
        presidentCounts: {
            "Imelda Alimin": 0,
            "Jonathan Santoso": 0,
            "Abstain": 0,
        },
        vicePresidentCounts: {
            "Nadya Rei": 0,
            "Abstain": 0,
        },
        treasurerCounts: {
            "Joanico Huang": 0,
            "Abstain": 0
        }
    }

    const pollingCollectionRef = collection(db, process.env.REACT_APP_FIRESTORE_KEY);
    const querySnapshot = await getDocs(pollingCollectionRef);
    querySnapshot.forEach((doc) => {
        const responseData = doc.data()

        voteResult.presidentCounts[responseData.president]++
        voteResult.vicePresidentCounts[responseData.vicePresident]++
        voteResult.treasurerCounts[responseData.treasurer]++
    });

    return voteResult
}