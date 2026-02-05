import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import setupLocator from "@locator/runtime";
import "./styles/globals.css";
import "./i18n";
import { QueryProvider } from "./providers/QueryProvider";
import { ReduxProvider } from "./providers/ReduxProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { AlertProvider } from "./providers/AlertProvider";
import { HelmetProvider } from "react-helmet-async";
import { AppRouter } from "./routes";
import { ErrorBoundary } from "./components/atoms/ErrorBoundary";
import { DefaultSEO } from "./components/atoms/DefaultSEO";

if (import.meta.env.DEV) {
  setupLocator();
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <ReduxProvider>
        <QueryProvider>
          <ThemeProvider defaultMode="light" storageKeyTheme="wakp-theme">
            <AlertProvider>
              <DefaultSEO />
              <ErrorBoundary>
                <AppRouter />
              </ErrorBoundary>
            </AlertProvider>
          </ThemeProvider>
        </QueryProvider>
      </ReduxProvider>
    </HelmetProvider>
  </StrictMode>
);
