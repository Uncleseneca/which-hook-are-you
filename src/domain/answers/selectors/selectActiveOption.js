import { get } from 'lodash'

export const selectActiveOption = key => state =>
  get(state.answers, `${key}.id`)
