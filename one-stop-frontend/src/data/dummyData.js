// Dummy data for One Stop Application

export const engineeredData = {
    branches: [
        {
            branch: "Computer Science",
            percentage: 92,
            reason: "Strong performance in Maths (95%) and high interest in Coding and Logic."
        },
        {
            branch: "Electronics & Communication",
            percentage: 78,
            reason: "Good grasp of Physics and interest in Electronics, but Coding preference dominates."
        },
        {
            branch: "Mechanical Engineering",
            percentage: 45,
            reason: "Physics score is decent, but low interest in Mechanics and heavy machinery."
        }
    ],
    skills: {
        required: ["React.js", "JavaScript", "Data Structures", "Python", "Database Management"],
        missing: ["Data Structures", "Database Management"],
        completed: ["React.js", "JavaScript", "Python"]
    },
    internships: [
        {
            id: 1,
            title: "Frontend Developer Intern",
            company: "TechSolutions Inc.",
            domain: "Web Development",
            mode: "Remote",
            duration: "3 Months",
            icon: "💻"
        },
        {
            id: 2,
            title: "Python Trainee",
            company: "DataCorp",
            domain: "Data Science",
            mode: "Hybrid",
            duration: "6 Months",
            icon: "🐍"
        },
        {
            id: 3,
            title: "IoT Research Intern",
            company: "SmartSystems",
            domain: "IoT & Electronics",
            mode: "On-site",
            duration: "2 Months",
            icon: "📡"
        }
    ],
    roadmap: [
        {
            month: "Month 1",
            title: "Foundation & Basics",
            status: "completed",
            description: "Master HTML, CSS, JavaScript and learn Git basics.",
            resources: ["MDN Web Docs", "FreeCodeCamp"]
        },
        {
            month: "Month 2",
            title: "Advanced React & State",
            status: "in-progress",
            description: "Deep dive into React, Hooks, Context API and Redux.",
            resources: ["React Official Docs", "Frontend Masters"]
        },
        {
            month: "Month 3",
            title: "Projects & Portfolio",
            status: "pending",
            description: "Build 3 major projects and deploy them. Update resume.",
            resources: ["Youtube Tutorials", "GitHub"]
        }
    ]
};
