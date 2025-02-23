import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ViewEvents from "./components/ViewEvents";
import CreateEvent from "./components/CreateEvent";
import EditEvent from "./components/EditEvent";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ViewEvents />} />
          <Route path="events" element={<ViewEvents />} />
          <Route path="add-event" element={<CreateEvent />} />
          <Route path="update-event/:id" element={<EditEvent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
