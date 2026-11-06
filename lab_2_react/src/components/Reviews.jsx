import { useEffect, useState } from "react";
import Card from "./Card";

const VARIANT = 28;
const REVIEWS_URL = `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`;

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        const controller = new AbortController();

        async function loadReviews() {
            try {
                const response = await fetch(REVIEWS_URL, { signal: controller.signal });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                setReviews(await response.json());
                setStatus("done");
            } catch (error) {
                if (error.name === "AbortError") return;
                console.error("Error fetching reviews:", error);
                setStatus("error");
            }
        }

        loadReviews();

        return () => controller.abort();
    }, []);

    return (
        <Card title="Reviews from Employers" className="sm:col-span-2">
            {status === "loading" && <p className="text-muted">Loading reviews…</p>}
            {status === "error" && <p className="text-red-500">Failed to load reviews. Please try again later.</p>}

            <div className="flex flex-col gap-3">
                {reviews.map((review) => (
                    <article
                        key={review.id}
                        className="rounded-lg border border-l-[3px] border-line border-l-accent bg-page px-4 py-3"
                    >
                        <strong className="font-mono">{review.name}</strong>
                        <div className="mb-1.5 font-mono text-sm text-muted">{review.email}</div>
                        <p className="text-ink-soft">{review.body}</p>
                    </article>
                ))}
            </div>
        </Card>
    );
}
export default Reviews;
