import { render, waitFor } from "@testing-library/react";
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
    const val = render(<Mock />);
    await waitFor(() => expect(val).toBeTruthy());
  });
});
