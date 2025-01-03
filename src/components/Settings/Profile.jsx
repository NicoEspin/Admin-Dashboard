import React from "react";
import SettingsSection from "./SettingsSection";
import { User } from "lucide-react";
import yo from "../../assets/Yo-profile.jpeg";

const Profile = () => {
  return (
    <SettingsSection icon={User} title={"Perfil"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src={yo}
          alt="Foto de Perfil"
          className="rounded-full size-20 object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Nicolás Espin</h3>
          <p>nicoespin@gmail.com</p>
        </div>
      </div>
      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold 
      py-2 px-4 rounded transition duration-200 w-full sm:w-auto"
      >
        Editar Perfil
      </button>
    </SettingsSection>
  );
};

export default Profile;
