import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./index";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("NotFound Page", () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <NotFound />
          </BrowserRouter>
        </I18nextProvider>
      </Provider>
    );

  it("renders 404 heading", () => {
    renderComponent();
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("renders error title", () => {
    renderComponent();
    // Using a more flexible matcher since translation might be active
    const title = screen.getByText(
      /عذراً، الصفحة غير موجودة|Oops! Page Not Found/i
    );
    expect(title).toBeInTheDocument();
  });

  it("renders back to home button", () => {
    renderComponent();
    // Use getByRole with name to be specific and avoid multiple buttons from layout
    const button = screen.getByRole("button", {
      name: /العودة للرئيسية|Back to Home/i,
    });
    expect(button).toBeInTheDocument();
  });
});
