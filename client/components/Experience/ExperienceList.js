const ExperienceList = 
[
    {
        company : "Amazon",
        role : "Software Development Engineering Intern",
        timeline : {start : "May 2024", end : "July 2024"},
        keypoints : [
            "Engineered a feature to segregate failed invoices into specific Dead Letter Queues by prioritizing validation of small invoices during high traffic, preventing starvation by large invoices, and improving re-drive time by 50%.",
            "Designed APIs using design patterns to trigger asynchronous invoice validation by returning the StepFunction ID, achieving 100% code coverage through comprehensive unit tests.",
            "Developed and executed integration tests for seamless service interaction. Leveraged AWS services like SQS, SNS, StepFunctions, SWF, S3, Route53 and CloudWatch throughout the internship.",
            "Tech Stack: Tech Stack: Java, Junit, Mockito, Git, Smithy, AWS"
        ],
        link : "https://drive.google.com/file/d/1pCSQjtkjZLAtyRk5FIB_U4Gmh2AuHqxw/view?usp=sharing",
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