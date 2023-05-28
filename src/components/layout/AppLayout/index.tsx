import NavBar from "../../NavBar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="App">
      <div className="outlet">{children}</div>
    </div>
  );
}

export default AppLayout;
