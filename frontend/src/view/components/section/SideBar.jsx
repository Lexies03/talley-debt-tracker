import samplePic from "../../../assets/logo.png"

const SideBar = () => {
  const buttonTabs = [{ name: "Dashboard" }, { name: "Debts" }];
  return (
    <div className="w-[300px] h-screen bg-blue-600">
      <section>
        <img src={samplePic} alt="Profile Picture" width={300} height={300} className="rounded-xl"/>
        <p>Name</p>
      </section>
      <section>
        <p>SAMPLE SAMPLE</p>
        <ul>
            {buttonTabs.map(((tabs,index) => (
                <li key={index}>{tabs.name}</li>
            )))}
        </ul>
      </section>
    </div>
  );
};

export default SideBar;
