import React from 'react';
import members from '../../constants/members';
import Table from '../../components/Table/Table';
import TableRow from '../../components/Table/TableRow';

export default function Component() {
  const renderMembers = members.map(({ id, name, email, img }) => (
    <TableRow key={id} name={name} email={email} img={img} />
  ));
  return (
    <div className="teams-people-view-body">
      <div className="panel panel-default">
        <div className="panel-body">
          <Table>{renderMembers}</Table>
        </div>
      </div>
    </div>
  );
}
