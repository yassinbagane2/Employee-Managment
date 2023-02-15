import Table from "../components/Dashboard/Table";

const Dashboard = () => {
  return (
    <div className="w-full p-2">
      <div className="mx-4 flex flex-col items-center justify-center rounded-md bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-xl text-blue-600">Recent Employees</h2>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
