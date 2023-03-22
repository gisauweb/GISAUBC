import { db } from "./firebase";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";

export const writeVote = async (studentID, options) => {

    // TODO: check if student id matches membership credential


    const uniqueID = studentID
    const pollingDocRef = doc(db, process.env.REACT_APP_FIRESTORE_KEY, uniqueID);
    const pollingSnapshot = await getDoc(pollingDocRef);

    if (pollingSnapshot.exists()) {
        const error = new Error("User voted already");
        error.code = 401;
        throw error;
    } else {
        const { president, vicePresident, treasurer } = options;
        const createdAt = new Date();

        try {
            await setDoc(pollingDocRef, {
                studentID,
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
        presidentCounts : {
            "Imelda Alimin" : 0,
            "Jonathan Santoso" : 0,
            "Abstain" : 0,
        },
        vicePresidentCounts : {
            "Nadya Rei" : 0,
            "Abstain" : 0,
        },
        treasurer : {
            "Joanico Huang" : 0,
            "Abstain" : 0
        }
    }

    const pollingCollectionRef = collection(db, process.env.REACT_APP_FIRESTORE_KEY);
    const querySnapshot = await getDocs(pollingCollectionRef);
    querySnapshot.forEach((doc) => {
        const responseData = doc.data()

        voteResult.presidentCounts[responseData.president]++
        voteResult.vicePresidentCounts[responseData.vicePresident]++
        voteResult.treasurer[responseData.treasurer]++
    });

    return voteResult
}