import {maskBr} from "js-brasil";
import PropTypes from 'prop-types';

const DetailRow = ({label, value}) => {
  return (
    <div className={"flex flex-row justify-between"}>
      <p className={"font-semibold text-textPrimary"}>
        {label}:
      </p>
      <p className={"text-textPrimary ml-4"}>
        {value}
      </p>
    </div>
  );
};

export default function UserDetails({user}) {
  return (
    <div className={"flex flex-col mx-auto w-full"}>
      <DetailRow label={"CPF"} value={maskBr.cpf(user.cpf ?? '')} />
      <DetailRow label={"Telefone"} value={user.phone ?? ''} />
      <DetailRow label={"Email"} value={user.email ?? ''} />
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    cpf: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired
}

DetailRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

