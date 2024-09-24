import { createPinia, defineStore } from "pinia";

export const mensajesStore = defineStore({
    id: "idMensajes",
    state: () => ({
        mensajes: [],
    }),
    actions: {
        addMensaje(mensaje) {
            this.mensajes.push(mensaje);
        },
    },
});

const pinia = createPinia();

export default pinia;
