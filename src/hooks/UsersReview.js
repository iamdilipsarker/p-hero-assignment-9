import { useEffect, useState} from "react"


const usersReview = () => {
    const [usersReviews, setUsersReviews] = useState([]);
    useEffect(() => {
        fetch("review-data.json")
            .then(res => res.json())
            .then(data => setUsersReviews(data));
    }, []);
    return [usersReviews, setUsersReviews];
}

export default usersReview;