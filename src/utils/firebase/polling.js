import { db } from "./firebase";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";

export const writeVote = async (credentials, options) => {
    const { studentID } = credentials

    checkStudentIDValidity(studentID);
    await membershipVerification(studentID);

    const pollingDocRef = doc(db, process.env.REACT_APP_FIRESTORE_KEY, studentID);
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
                StudentID: studentID,
                President: president,
                VicePresident: vicePresident,
                Treasurer: treasurer,
                CreatedAt: createdAt
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

        voteResult.presidentCounts[responseData.President]++
        voteResult.vicePresidentCounts[responseData.VicePresident]++
        voteResult.treasurerCounts[responseData.Treasurer]++
    });

    return voteResult
}

function checkStudentIDValidity(studentID) {
    const regex = /^\d{8}$/;

    if (!regex.test(studentID)) {
        const error = new Error("Invalid syntax");
        error.code = 400;
        throw error;
    }
}

async function membershipVerification(uniqueID) {
    const membershipDocRef = doc(db, "membership", uniqueID);
    const membershipSnapshot = await getDoc(membershipDocRef);
    if (!membershipSnapshot.exists()) {
        const error = new Error("User is not a member");
        error.code = 401;
        throw error;
    }
}