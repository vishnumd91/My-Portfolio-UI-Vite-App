import { render } from "@testing-library/react";
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
  it("should render the About Component", () => {
    const val = render(<Mock />);
    expect(val).toBeTruthy();
  });
});
