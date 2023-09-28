import {
  FormCondition,
  FormConditionRule,
  FormConditionRuleOperatorType,
  FormConditionActionType,
  FormConditionLogicType,
} from '../../../types/CMS/form'

import { isArray } from 'lodash'

interface FormConditionalWrapper {
  children: JSX.Element
  formValues: unknown
  condition?: FormCondition
}

interface getConditionalType {
  rule: FormConditionRule
  values: unknown
}

const getConditional = ({ rule, values }: getConditionalType) => {
  let refValue = (values as any)[rule.field]

  if (!refValue) {
    return false
  }

  if (
    isArray(refValue) &&
    rule.operator !== FormConditionRuleOperatorType.CONTAINS
  ) {
    refValue = refValue[0]
  }

  switch (rule.operator) {
    case FormConditionRuleOperatorType.IS:
      if (refValue === rule.value) {
        return true
      } else {
        return false
      }
      break
    case FormConditionRuleOperatorType.IS_NOT:
      if (refValue !== rule.value) {
        return true
      } else {
        return false
      }
      break
    case FormConditionRuleOperatorType.GREATER_THEN:
      if (refValue > rule.value) {
        return true
      } else {
        return false
      }
      break
    case FormConditionRuleOperatorType.LESS_THEN:
      if (refValue < rule.value) {
        return true
      } else {
        return false
      }
      break
    case FormConditionRuleOperatorType.CONTAINS:
      if (refValue.includes(rule.value)) {
        return true
      } else {
        return false
      }
      break
  }
}

const FormConditionalWrapper = ({
  children,
  formValues,
  condition,
}: FormConditionalWrapper) => {
  const conditionResult = condition?.rules.map((rule) =>
    getConditional({ rule: rule, values: formValues })
  )
  let shouldShow

  if (condition) {
    if (condition?.logicType === FormConditionLogicType.ALL) {
      shouldShow = conditionResult?.includes(false)
      if (condition.actionType === FormConditionActionType.HIDE) {
        return !shouldShow ? null : children
      } else {
        return !shouldShow ? children : null
      }
    } else if (condition?.logicType === FormConditionLogicType.ANY) {
      shouldShow = conditionResult?.includes(true)
      if (condition.actionType === FormConditionActionType.HIDE) {
        return shouldShow ? null : children
      } else {
        return shouldShow ? children : null
      }
    } else {
      return children
    }
  } else {
    return children
  }
}

export default FormConditionalWrapper
