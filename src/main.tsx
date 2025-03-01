import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { persistor, store } from "./redux/store.ts";
import routes from "./routes/routes.tsx";
import { Toaster } from "sonner";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a tanstack query client
const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={routes} />
          <Toaster />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
