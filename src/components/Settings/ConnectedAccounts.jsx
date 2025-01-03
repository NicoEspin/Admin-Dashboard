import { useState } from "react";
import SettingsSection from "./SettingsSection";
import { HelpCircle, Plus } from "lucide-react";

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Google",
      connected: true,
      icon: "/google.svg",
    },
    {
      id: 2,
      name: "Github",
      connected: false,
      icon: "/github.svg",
    },
    {
      id: 3,
      name: "Linkedin",
      connected: true,
      icon: "/linkedin.svg",
    },
  ]);

  return (
    <SettingsSection icon={HelpCircle} title={"Cuentas Vinculadas"}>
      {connectedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex items-center justify-between py-3"
        >
          <div className="flex gap-1">
            <img
              src={account.icon}
              alt={account.name}
              className="size-6 object-cover rounded-full mr-2"
            />
            <span className="text-gray-300">{account.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded transition-colors
					 ${
             account.connected
               ? "bg-green-600 hover:bg-green-700"
               : "bg-gray-600 hover:bg-gray-700"
           }`}
            onClick={() => {
              setConnectedAccounts(
                connectedAccounts.map((acc) => {
                  if (acc.id === account.id) {
                    return {
                      ...acc,
                      connected: !acc.connected,
                    };
                  }
                  return acc;
                })
              );
            }}
          >
            {account.connected ? "Conectado" : "Conectar"}
          </button>
        </div>
      ))}
	  <button className="items-center mt-4 text-indigo-400 hover:text-indigo-300 
	  transition duration-200 flex">
		<Plus size={18} className="mr-2"/> Agregar Cuenta
	  </button>
    </SettingsSection>
  );
};

export default ConnectedAccounts;
