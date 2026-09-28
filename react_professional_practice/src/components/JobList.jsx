import React from "react";

const JobList = () => {

  const jobs = [
    {
      id: 1,
      title: "React Developer",
      vacancies: 3,
      applications: 15
    },
    {
      id: 2,
      title: "Node Developer",
      vacancies: 0,
      applications: 10
    },
    {
      id: 3,
      title: "PHP Developer",
      vacancies: 2,
      applications: 25
    }
  ];


  return (
    <div>
      <h1>Job List</h1>

      {
        jobs.map((job) => {

          const status = job.vacancies > 0 ? "Open" : "Closed";

          const isHighDemand = job.applications > 20;


          return (
            <div 
              key={job.id}
              style={{
                border: "1px solid gray",
                padding: "15px",
                margin: "15px",
                borderRadius: "8px"
              }}
            >

              <h2>{job.title}</h2>

              <p>
                <strong>Vacancies:</strong> {job.vacancies}
              </p>

              <p>
                <strong>Applications:</strong> {job.applications}
              </p>


              <p>
                <strong>Status:</strong>{" "}
                {
                  status === "Open" 
                  ? 
                  <span style={{color:"green"}}>
                    Open
                  </span>
                  :
                  <span style={{color:"red"}}>
                    Closed
                  </span>
                }
              </p>


              {
                isHighDemand && (
                  <span
                    style={{
                      background:"orange",
                      color:"white",
                      padding:"10px",
                      borderRadius:"5px"
                    }}
                  >
                    High Demand
                  </span>
                )
              }


            </div>
          )

        })
      }

    </div>
  );
};


export default JobList;