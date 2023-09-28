import { FormFieldset as FormFieldsetType } from '../../../types/CMS'
import FormField from '../FormField/FormField'
//import styles from './FormFieldset.module.scss'

export interface FormFieldsetProps {
  fieldset: FormFieldsetType
}

const FormFieldset = ({ fieldset }: FormFieldsetProps) => {
  return (
    <div>
      {!!fieldset.caption && <h3>{fieldset.caption}</h3>}
      <div className={'styles.formFieldSets'}>
        {fieldset.columns[0].fields?.map?.((field, index) => (
          <FormField key={index} field={field} />
        ))}
      </div>
    </div>
  )
}

export default FormFieldset
