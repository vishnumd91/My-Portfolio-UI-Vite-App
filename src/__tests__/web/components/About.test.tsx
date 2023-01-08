import { render, waitFor } from "@testing-library/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../../utils";
import { About } from "../../../web/components/about";

const Mock = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <About />
    </QueryClientProvider>
  );
};

describe("About Test Cases", () => {
  it("should render the About Component", async () => {
    const val = render(<Mock />);
    await waitFor(() => expect(val).toBeTruthy());
  });
});
