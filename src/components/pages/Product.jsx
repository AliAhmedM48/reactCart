// import React from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="p-4 bg-gray-100 border rounded-md shadow-md">
        <div className="text-lg font-bold mb-2">
          Params using [useParams]: {id}
        </div>
        <div className="text-gray-700">
          Search Query using [useSearchParams]: {searchParams.get("name")}
        </div>
      </div>
      <div className="text-center mt-4 fixed bottom-10 left-1/2 -translate-x-1/2">
        <button
          onClick={() => navigate("/")}
          className="bg-transparent border-2 border-gray-800 hover:bg-gray-800 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
          <br />
          useNavigate
        </button>
      </div>
    </>
  );
}
