import { Form } from "../types/CMS"

export const umbracoForms = async (id: string): Promise<Form> => {
    const resp = await fetch(
      `${process.env.UMBRACO_MANAGEMENT_API_URL}/forms/${id}`,
      {
        headers: {
          'umb-project-alias': process.env.CMS_PROJECT_ALIAS,
          'api-key': process.env.CMS_API_KEY,
        } as HeadersInit,
      }
    )
  
    const data = await resp.json()
  
    return data
  }
  