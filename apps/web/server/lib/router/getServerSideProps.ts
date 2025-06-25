import { wrapGetServerSidePropsWithSentry } from "@sentry/nextjs";
import type { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getRoutedUrl } from "@calcom/lib/server/getRoutedUrl";

export const getServerSideProps = wrapGetServerSidePropsWithSentry(async function getServerSideProps(
  context: GetServerSidePropsContext
) {
  const routed = await getRoutedUrl(context);
  const locale = context.locale ?? 'en';
  const i18nProps = await serverSideTranslations(locale, ['common']);

  return {
    props: {
      ...routed.props,
      ...i18nProps,
    },
  };
}, "/router");
