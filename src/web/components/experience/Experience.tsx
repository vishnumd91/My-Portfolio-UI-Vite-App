import React, { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import { getExperienceDataFromSanity } from "../../../services";
import { getDateInRequiredFormat } from "../../../utils";
import { ExperienceType } from "../../types/experience.types";

export const Experience = (): ReactElement => {
  const [, setError] = useState<unknown>();

  const { data: experienceData, isError } = useQuery(
    "experience",
    async () => {
      const response: ExperienceType[] = await getExperienceDataFromSanity();
      return response ?? [];
    },
    {
      onError: (err: unknown) => {
        setError(err);
      },
    }
  );

  return (
    <div className="container-fluid p-0">
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          {isError ? (
            <p className="text-center fs-4 m-auto">Something Went Wrong</p>
          ) : (
            <>
              {experienceData &&
                experienceData?.map((experienceInputs) => {
                  const {
                    jobRole,
                    country,
                    companyName,
                    state,
                    description,
                    startDate,
                    endDate,
                    _id,
                    isCurrent,
                  } = experienceInputs;
                  return (
                    <div
                      key={_id}
                      className="d-flex flex-column flex-md-row justify-content-between mb-5"
                    >
                      <div className="flex-grow-1">
                        <h3 className="mb-0">{jobRole}</h3>
                        <div className="subheading mb-3">
                          {`${companyName}, ${state}, ${country}`}
                        </div>
                        <p>{description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="text-primary">
                          {`${getDateInRequiredFormat(startDate)} - ${
                            isCurrent
                              ? "Present"
                              : getDateInRequiredFormat(endDate)
                          }`}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Experience;
