import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';
import Configuracoes from '../screens/Configuracoes';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Início" component={Home} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Configurações" component={Configuracoes} />
    </Drawer.Navigator>
  );
}
