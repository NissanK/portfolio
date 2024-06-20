const ExperienceList = 
[
    {
        company : "Amazon",
        role : "Software Development Engineering Intern",
        timeline : {start : "May 2024", end : "July 2024"},
        keypoints : [
            "Implemented a function to segregate failed invoices into specific Dead Letter Queues, for efficient re-drive processes.",
            "Prioritized the validation of small invoices promptly during high traffic, preventing delays caused by large invoices in the queues further improving failed invoices re-drive time by 50%.",
            "Designed APIs using Design Patterns to validate end-to-end triggering functions for invoices, resulting in a 25% reduction in processing errors and achieving 95% code coverage through comprehensive unit tests.",
            "Tech Stack: Java, Junit, Mockito, Git, Smithy, AWS"
        ],
        link : null,
        expId : 0
    },
    {
        company : "MACS-DTU",
        role : "President",
        timeline : {start : "Nov 2023", end : "Present"},
        keypoints : [
            "Managed a team of 120+ members.",
            "Effectively coordinated various university-level events and workshops, positively impacting over 750 participants.",
            "Secured sponsorship from multiple companies, including Chess.com, to host two consecutive successful Blitz Offline Chess Tournaments, each attracting over 300 registrations annually",
            "Hosted successful online Capture the Flag events with 200+ participants."
        ],
        link : "https://macsdtu.vercel.app/",
        expId : 1
    }
];

export default ExperienceList;