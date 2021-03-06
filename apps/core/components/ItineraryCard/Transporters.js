// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { CarrierLogo } from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { uniq } from 'ramda';

import type { Transporters_data as TransportersType } from './__generated__/Transporters_data.graphql';

type SegmentsType = $PropertyType<TransportersType, 'segments'>;

type Props = {|
  +data: ?TransportersType,
|};

const mapTransporters = (segments: SegmentsType) => {
  const carriers =
    segments &&
    uniq(
      segments.map(segment => ({
        name: '',
        code: (segment && segment.transporter?.name) ?? '',
      })),
    );

  return carriers;
};

function Transporters({ data }: Props) {
  const carriers = mapTransporters(data?.segments);

  if (carriers == null) {
    return null;
  }

  return (
    <CarrierLogo
      size={Platform.OS === 'web' ? 'large' : 'medium'}
      carriers={carriers}
    />
  );
}

export default createFragmentContainer(Transporters, {
  data: graphql`
    fragment Transporters_data on Sector {
      segments {
        transporter {
          name
        }
      }
    }
  `,
});
