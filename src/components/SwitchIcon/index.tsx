import React from 'react';
import { MdHelpOutline } from 'react-icons/md';
import {
  IconActions,
  IconBudget,
  IconHome,
  IconPeople,
  IconProposal,
  IconReports,
  IconSettings,
} from '~/assets/Icons';

interface IProps {
  name: string;
  color?: string;
}

const defaultProps = {
  color: '#fff',
};

const SwitchIcon: React.FC<IProps> = ({ name, color }: IProps) => {
  switch (name) {
    case 'budget':
      return <IconBudget color={color} />;
    case 'reports':
      return <IconReports color={color} />;
    case 'actions':
      return <IconActions color={color} />;
    case 'user':
      return <IconPeople color={color} />;
    case 'proposal':
      return <IconProposal color={color} />;
    case 'revisor':
      return <IconSettings color={color} />;
    case 'home':
      return <IconHome color={color} />;
    default:
      return <MdHelpOutline color={color} />;
  }
};

SwitchIcon.defaultProps = defaultProps;

export default SwitchIcon;
