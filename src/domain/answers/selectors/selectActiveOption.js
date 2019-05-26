import { get } from 'lodash'

export const selectActiveOption = question => state =>
  get(state.answers, `${question}.id`)
