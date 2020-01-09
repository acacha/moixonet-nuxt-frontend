<template>
  <v-data-table
    :headers="headers"
    :items="employees"
    :items-per-page="5"
    @click:row="selectRow"
    :multi-sort="true"
    class="elevation-1"
  />
</template>

<script>
export default {
  name: 'EmployeesTable',
  props: {
    employees: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    headers: [
      { text: 'Employee ID', value: 'id' },
      { text: 'Name', value: 'name' },
      { text: 'Position Title', value: 'title' },
      { text: 'Salary', value: 'salary' }
    ]
  }),
  methods: {
    selectRow (event) {
      const employee = {
        name: event.name,
        title: event.title
      }

      this.$emit('select-employee', employee)
    }
  }
}
</script>

<style lang="scss" scoped></style>
