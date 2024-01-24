import MainLayout from "./layout";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    </>
  )
}

export default App;