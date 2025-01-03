import React from "react";
import SettingsSection from "./SettingsSection";
import { Lock } from "lucide-react";
import Switch from "./Switch";

const Security = () => {
  const [isTwoFactorAuthEnabled, setIsTwoFactorAuthEnabled] =
    React.useState(false);
  return (
    <SettingsSection icon={Lock} title={"Seguridad"}>
      <Switch
        label={"Autenticación de dos pasos"}
        isOn={isTwoFactorAuthEnabled}
        onToggle={() => setIsTwoFactorAuthEnabled(!isTwoFactorAuthEnabled)}
      />

      <div className="mt-4">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 
        px-4 rounded transition duration-200 w-full sm:w-auto"
        >
          Cambiar contraseña
        </button>
      </div>
    </SettingsSection>
  );
};

export default Security;
