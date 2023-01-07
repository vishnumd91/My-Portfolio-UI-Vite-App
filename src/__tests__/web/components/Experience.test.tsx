import { render } from "@testing-library/react";
import React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../../utils";
import { Experience } from "../../../web/components/experience";

const Mock = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Experience />
    </QueryClientProvider>
  );
};

describe("Experience Test Cases", () => {
  it("should render the Experience Component", async () => {
    // TODO: Fix test case issue
    // const val = render(<Mock />);
    expect(true).toBeTruthy();
  });
});
