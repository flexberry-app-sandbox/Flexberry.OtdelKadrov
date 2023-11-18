export default {
  projections: {
    НачальникE: {
      iDсотрдника: {
        __caption__: 'I dсотрдника'
      },
      сотрудник: {
        __caption__: 'Сотрудник',
        iDдолжности: {
          __caption__: 'I dдолжности'
        }
      }
    },
    НачальникL: {
      iDсотрдника: {
        __caption__: 'I dсотрдника'
      },
      сотрудник: {
        __caption__: 'I dдолжности',
        iDдолжности: {
          __caption__: 'I dдолжности'
        }
      }
    }
  },
  validations: {
    iDсотрдника: {
      __caption__: 'iDсотрдника'
    },
    сотрудник: {
      __caption__: 'сотрудник'
    }
  }
};
