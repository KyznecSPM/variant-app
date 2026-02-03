import {
  ButtonSize as ButtonSizeHelper,
  ButtonVariant as ButtonVariantHelper,
  IconNames,
} from './helper';

export type IconName = (typeof IconNames)[number];
export type ButtonSize =
  (typeof ButtonSizeHelper)[keyof typeof ButtonSizeHelper];
export type ButtonVariant =
  (typeof ButtonVariantHelper)[keyof typeof ButtonVariantHelper];
