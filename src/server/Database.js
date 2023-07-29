const ROLE = {
    ADMIN: 'admin',
    MANAGER: 'manager',
    EMPLOYEE: 'employee',
    IRS_AGENT: 'IRS agent'
}

module.exports = {
    ROLE:ROLE,
    users:[
        { id: 1, name: 'Victor', role: ROLE.ADMIN},
        { id: 2, name: 'Jason', role: ROLE.MANAGER},
        { id: 3, name: 'Pat', role: ROLE.EMPLOYEE},
        { id: 4, name: 'Putin', role: ROLE.IRS_AGENT}
    ],
    project: [
        { id: 1, name: 'Victor Plan', userId: 1},
        { id: 2, name: 'Jason Plan', userId: 2},
        { id: 3, name: 'Pat Plan', userId: 3},
        { id: 4, name: 'Putin Plan', userId: 4}

    ]
}