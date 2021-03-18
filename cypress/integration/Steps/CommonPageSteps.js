import { After } from 'cypress-cucumber-preprocessor/steps'

import CommonPage from '../Pages/CommonPage'

const commonPage = new CommonPage()

After(() => {
  commonPage.logout('https://app.iatn.community/app/logout')
})
