<template>
    <!-- Formulario de profesores -->
    <section>
        <h3>
            {{ isEditing ? 'Actualizar Profesor' : 'Añadir Profesor' }}
        </h3>
        <div>
            <label for="">Nombre(s):</label>
            <input type="text" v-model="teacher.teacherName">
        </div>
        <div>
            <label for="">Apellidos:</label>
            <input type="text" v-model="teacher.surname">
        </div>
        <div>
            <label for="">Matricula:</label>
            <input type="text" v-model="teacher.tuition">
            <!-- Muestra el mensaje si la matricula ya existe -->
            <span v-if="errorMSG">{{ errorMSG }}</span>
        </div>
        <div>
            <div>
                <label for="">Materias:</label>
                <input type="text" v-model="subject">
            </div>
            <div>
                <button @click="handleSubject()">Agregar materia</button>
            </div>
            <div>
                <!-- Muestra la lista de materias que se vayan agregando -->
                <ul>
                    <li v-for="(elm, index) in teacher.subjects" :key="index">{{ elm }}</li>
                </ul>
            </div>
        </div>
        <div>
            <input type="checkbox" v-model="teacher.doc">Documentación entregada
        </div>
        <div>
            <!-- <button @click="handleAddTeacher()">Agregar</button> -->
             <!-- Botón para agregar/actualizar los datos -->
            <button @click="handleAddOrUpdateTeacher()">
                {{ isEditing ? 'Actualizar' : 'Agregar' }}
            </button>
        </div>
    </section>
    <!-- Lista de profesores agregados -->
    <section>
        <div>
            <h4>
                Lista de Profesores
            </h4>
            <table>
                <tr>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Apellidos
                    </th>
                    <th>
                        Matricula
                    </th>
                    <th>
                        Materias
                    </th>
                    <th>
                        Documentación entregada
                    </th>
                    <th>
                        Acciones
                    </th>
                </tr>
                <tr v-for="elm in teachers" :key="elm.tuition">
                    <th>
                        {{ elm.teacherName }}
                    </th>
                    <th>
                        {{ elm.surname }}
                    </th>
                    <th>
                        {{ elm.tuition }}
                    </th>
                    <th>
                        <ul>
                            <li v-for="(item, index) in elm.subjects" :key="index">{{ item }}</li>
                        </ul>
                    </th>
                    <th v-if="elm.doc">
                        Entregada
                    </th>
                    <th v-else>
                        No entregada
                    </th>
                    <th>
                        <!-- Botón para eliminar registro, la función obtiene como parametro 
                        la matricula (funciona como id) -->
                        <button @click="handleDeleteTeacher(elm.tuition)">Borrar</button>
                        <!-- Botón para editar registro, la función obtiene como parametro 
                        el objeto completo del profesor -->
                        <button @click="handleEditTeacher(elm)">Editar</button>
                    </th>
                </tr>
            </table>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';

// Declaramos el tipo de datos de que cada elemento del objecto
interface ITeacher {
    teacherName: string;
    surname: string;
    tuition: string;
    subjects: Array<string>;
    doc: boolean;
}

// Le pasamos el valor de cada elemento del objecto
let teacher:Ref<ITeacher> = ref({
    teacherName: '',
    surname: '',
    tuition: '',
    subjects: [],
    doc: false
})

// Asignamos el array 
let teachers:Ref<Array<ITeacher>> = ref([])

// Definimos las referencias con el tipo de dato
let subject:Ref<string> = ref('')

let errorMSG: Ref<string> = ref('');

let isEditing: Ref<boolean> = ref(false);

// Añadimos las materias al array y le añadimos el el valor de subject
const handleSubject = () => {
    teacher.value.subjects.push(subject.value)
    subject.value = ''
}

// const handleAddTeacher = () => {
    // El método some() prueba si algún elemento de la matriz pasa 
    // la prueba implementada por la función proporcionada.
//     const exists = teachers.value.some(elm => elm.tuition === teacher.value.tuition);
//     if (exists) {
//         errorMSG.value = "La matrícula ya existe.";
//         return;
//     } else {
//         errorMSG.value = ''; // Limpiar el mensaje de error
//     }

// teachers.value.push({
//     teacherName: teacher.value.teacherName,
//     surname: teacher.value.surname,
//     tuition: teacher.value.tuition,
//     subjects: teacher.value.subjects,
//     doc: teacher.value.doc
// })

//     teacher.value.teacherName = ""
//     teacher.value.surname = ""
//     teacher.value.tuition = ""
//     teacher.value.subjects = []
//     teacher.value.doc = false
// }

const handleAddOrUpdateTeacher = () => {
    
    // El método some() prueba si algún elemento de la matriz pasa 
    // la prueba implementada por la función proporcionada.
    // Permite comparar si existe la matricula en e arreglo y no deja guardar
    // el registro si ya existe la matricula
    const exists = teachers.value.some(elm => elm.tuition === teacher.value.tuition);

    // Condición para evaluar si se actualizara el profesor
    // Si isEditing es verdadero se actualiza el profesor, si es falso se agrega
    // al profesor.
    if (isEditing.value) {
        // Actualiza el profesor
        // Permite en contrar y comparar la matriculo del profesor a editar
        // si no encuestra la matricula se devuelve un -1
        const index = teachers.value.findIndex(elm => elm.tuition === teacher.value.tuition);
        // Si index es diferente a -1, se procede a editar al profesor
        if (index !== -1) {
            // Actualiza el profesor en el arreglo
            teachers.value[index] = { ...teacher.value }; // Actualiza
            isEditing.value = false; // Reset estado de edición
        }
        resetTeacher();
    } else {
        // Agrega un nuevo profesor
        
        // Compara si la matricula ya existe y actualiza el mensaje
        if (exists) {
            errorMSG.value = "La matrícula ya existe.";
            return;
        } else {
            errorMSG.value = ''; // Limpiar el mensaje de error
        }

        // Agrega al profesor
        teachers.value.push({ ...teacher.value });
        resetTeacher();
    }
};

// Restablece los inputs del formulario
const resetTeacher = () => {
    teacher.value = {
        teacherName: '',
        surname: '',
        tuition: '',
        subjects: [],
        doc: false
    };
};

// Permite editar al profesor, recibe la interface de ITeacher y copia los 
// campos/objeto, lo que permite obtener el dato de los campos del profesor
// a editar, por ultimo cambia el estado a verdadero para permiter actualizar
// al profesor
const handleEditTeacher = (elm: ITeacher) => {
    teacher.value = { ...elm };
    isEditing.value = true;
};

// Permite eliminar al profesor, recibe la matricula (id) del profesor
// y hace la comparación del id seleccionado con la lista de profesores registrados.
const handleDeleteTeacher = (id: string) => {
    teachers.value = teachers.value.filter((item) => item.tuition !== id)
}
</script>

<style scoped></style>