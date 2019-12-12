import React from 'react'
import { Component } from '../../lib'
import { Root } from './Page.styled'

import { PageSkeleton } from './Page.skeleton'

export type PageProps = {
    loading?: boolean
}

export const Page: Component<PageProps> = ({ loading, children, ...props }) => {
    return <Root {...props}> {loading ? <PageSkeleton /> : children}</Root>
}
