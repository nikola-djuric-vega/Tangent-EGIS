import { FormPage as FormPageType } from '../../../types/CMS'
import FormFieldset from '../../molecules/FormFieldset/FormFieldset'

const FormPage = ({ caption, fieldsets }: FormPageType) => {
  return (
    <div className={'styles.formPage -mt-10'}>
      <div>
        {fieldsets?.map?.((fieldset, index) => (
          <div key={index} className={'styles.fieldsetItem'}>
            <div className={'styles.fieldsetItemInner'}>
              <FormFieldset key={index} fieldset={fieldset} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FormPage
