import React, { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import { getDataFromSanity } from "../../../services";
import { AboutType } from "../../types/about.types";

export const About = (): ReactElement => {
  const [, setError] = useState<unknown>();
  const sanityQuery = `*%5B_type%20%3D%3D%20'about'%5D%20%7B%0A%20%20_id%2C%20address%2C%20state%2C%20country%2C%20description%2C%20email%2C%20firstName%2C%20lastName%2C%20mobileNumber%2C%20pin%2C%20github%2C%20facebook%2C%20twitter%2C%20linkedin%2C%20slug%0A%7D`;
  const { data: aboutData, isError } = useQuery(
    "about",
    async () => {
      const response: AboutType[] = await getDataFromSanity(sanityQuery);
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
      {/* <!-- About--> */}
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          {isError ? (
            <p className="text-center fs-4 m-auto">Something Went Wrong</p>
          ) : (
            <>
              {aboutData &&
                aboutData?.map((item) => {
                  return (
                    <div key={item?._id}>
                      <h1 className="mb-0">
                        {item?.firstName}
                        <span className="text-primary"> {item?.lastName}</span>
                      </h1>
                      <div className="subheading mb-5">
                        {`${item?.address} (+91) ${item?.mobileNumber} . `}
                        <a href="#">{item?.email.toUpperCase()}</a>
                      </div>
                      <p className="lead mb-5">{item?.description}</p>
                      <div className="social-icons">
                        <a
                          className="social-icon"
                          href={item?.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          className="social-icon"
                          href={item?.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                        <a
                          className="social-icon"
                          href={item?.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          className="social-icon"
                          href={item?.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
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

export default About;
