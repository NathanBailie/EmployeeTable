<script lang="ts">
import "./addForm.scss";
import { Component, Vue } from "vue-property-decorator";
import { createEmployee } from "../../utils/utils";

@Component
export default class AddForm extends Vue {
  name: string = "";
  gender: string = "";
  age: string = "";
  phone: string = "";
  manager: string = "";

  nameError: boolean = false;
  genderError: boolean = false;
  ageError: boolean = false;

  toValidateForm(): void {
    const inspectName: boolean = /[a-zA-Zа-яёА-ЯЁ]/.test(this.name);
    const inspectGender: boolean = this.gender.length > 0;
    const inspectAge: boolean = Number(this.age) > 18 ? true : false;

    this.nameError = !inspectName ? true : false;
    this.genderError = !inspectGender ? true : false;
    this.ageError = !inspectAge ? true : false;

    if (inspectName && inspectGender && inspectAge) {
      const newEmployee = createEmployee(
        this.name,
        this.gender,
        String(this.age),
        String(this.phone),
        this.manager
      );

      this.$store.commit("addNewEmployee", newEmployee);
      this.$store.commit("deactivateForm");
    }
  }
  closeForm() {
    this.nameError = false;
    this.genderError = false;
    this.ageError = false;

    this.$store.commit("deactivateForm");
  }
}
</script>

<template>
  <div class="addForm">
    <button
      class="addForm__callFormButton"
      @click="$store.commit('activateForm')"
    >
      Добавить сотрудника
    </button>

    <div
      :class="
        $store.state.formCondition
          ? 'addForm__background active'
          : 'addForm__background'
      "
    ></div>

    <form
      :class="
        $store.state.formCondition ? 'addForm__form active' : 'addForm__form'
      "
    >
      <img
        src="../../resources/icons/back.png"
        alt="back"
        title="close the form"
        @click="closeForm"
      />

      <h2>Add a new employee</h2>

      <div class="addForm__subwraper">
        <input type="text" v-model="name" placeholder="type the name" />
        <span :class="nameError ? 'error' : ''">Only letters please</span>
      </div>

      <div class="addForm__subwraper">
        <select v-model="gender">
          <option disabled value="">Choose the gender</option>
          <option>male</option>
          <option>female</option>
        </select>
        <span :class="genderError ? 'error' : ''"
          >Chose your gender please</span
        >
      </div>

      <div class="addForm__subwraper">
        <input type="number" v-model="age" placeholder="type the age" />
        <span :class="ageError ? 'error' : ''">Age must be over 18</span>
      </div>

      <div class="addForm__subwraper">
        <input v-model="phone" placeholder="type the phone" />
      </div>

      <div class="addForm__subwraper">
        <select v-model="manager">
          <option disabled value="">Choose the manager</option>
          <option v-for="manager in $store.state.managers" :key="manager.id">
            {{ manager.name }}
          </option>
        </select>
      </div>

      <button class="addForm__addButton" @click="toValidateForm">Add</button>
    </form>
  </div>
</template>