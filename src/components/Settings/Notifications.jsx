import React, { useState } from "react";
import SettingsSection from "./SettingsSection";
import { Bell } from "lucide-react";
import Switch from "./Switch";

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    cel: true,
  });

  return (
    <SettingsSection icon={Bell} title={"Notificaciones"}>
      <Switch
        label={"Activar notificaciones"}
        isOn={notifications.push}
        onToggle={() =>
          setNotifications({ ...notifications, push: !notifications.push })
        }
      />
      <Switch
        label={"Notificaciones de Celular"}
        isOn={notifications.email}
        onToggle={() =>
          setNotifications({ ...notifications, email: !notifications.email })
        }
      />
      <Switch
        label={"Notificaciones de Email"}
        isOn={notifications.cel}
        onToggle={() =>
          setNotifications({ ...notifications, cel: !notifications.cel })
        }
      />
    </SettingsSection>
  );
};

export default Notifications;
