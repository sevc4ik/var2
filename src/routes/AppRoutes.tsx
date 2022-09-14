import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppInstructionPage } from '../pages/AppInstructionPage/Postpage'
import { CREATE_POST_PAGE_URL, getPatchPostPageUrl, getPostpageUrl, HOMEPAGE_URL } from './clientUrls'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOMEPAGE_URL} element={<AppInstructionPage />} />
    </Routes>
  )
}
