import * as React from "react"
import { useContext } from "react"
import { useFormContext, FieldPath, FieldValues } from "react-hook-form"

// Define types for context values
export type FormFieldContextValue<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
  name: TName
}
export type FormItemContextValue = {
  id: string
}

const FormFieldContext = React.createContext<FormFieldContextValue | undefined>(undefined)
const FormItemContext = React.createContext<FormItemContextValue | undefined>(undefined)

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }
  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>")
  }

  const fieldState = getFieldState(fieldContext.name, formState)
  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

export { useFormField, FormFieldContext, FormItemContext }
