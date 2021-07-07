/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
      id
      employee_id
      employee_name
      full_name
      father_name
      cnic
      employee_addr
      employee_email
      employee_phone1
      employee_phone2
      employee_pic
      employee_salary
      role
      supervisor
      company
      blood_group
      transport_mode
      vichel_no
      dob
      doj
      status
      end_date
      last_degree
      institute
      leaves {
        items {
          id
          employee_id
          supervisor
          leave
          from
          to
          Lead_Approval
          Hr_Approval
          remarks
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      jobs {
        items {
          id
          employee_id
          organization
          start_date
          end_date
          designation
          createdAt
          updatedAt
        }
        nextToken
      }
      evaluation {
        items {
          id
          employee_id
          reviewer_name
          reviewer_title
          employee_name
          reviewing_date
          q_one
          q_two
          q_three
          q_four
          q_five
          q_six
          q_seven
          q_eight
          q_nine
          q_ten
          q_eleven
          q_twelve
          q_thirteen
          q_fourteen
          q_fifteen
          q_sixteen
          q_seventeen
          q_eighteen
          q_nineteen
          q_twenty
          q_twentyone
          q_twentytwo
          createdAt
          updatedAt
        }
        nextToken
      }
      warnings {
        items {
          id
          employee_id
          date
          type
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
      id
      employee_id
      employee_name
      full_name
      father_name
      cnic
      employee_addr
      employee_email
      employee_phone1
      employee_phone2
      employee_pic
      employee_salary
      role
      supervisor
      company
      blood_group
      transport_mode
      vichel_no
      dob
      doj
      status
      end_date
      last_degree
      institute
      leaves {
        items {
          id
          employee_id
          supervisor
          leave
          from
          to
          Lead_Approval
          Hr_Approval
          remarks
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      jobs {
        items {
          id
          employee_id
          organization
          start_date
          end_date
          designation
          createdAt
          updatedAt
        }
        nextToken
      }
      evaluation {
        items {
          id
          employee_id
          reviewer_name
          reviewer_title
          employee_name
          reviewing_date
          q_one
          q_two
          q_three
          q_four
          q_five
          q_six
          q_seven
          q_eight
          q_nine
          q_ten
          q_eleven
          q_twelve
          q_thirteen
          q_fourteen
          q_fifteen
          q_sixteen
          q_seventeen
          q_eighteen
          q_nineteen
          q_twenty
          q_twentyone
          q_twentytwo
          createdAt
          updatedAt
        }
        nextToken
      }
      warnings {
        items {
          id
          employee_id
          date
          type
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
      id
      employee_id
      employee_name
      full_name
      father_name
      cnic
      employee_addr
      employee_email
      employee_phone1
      employee_phone2
      employee_pic
      employee_salary
      role
      supervisor
      company
      blood_group
      transport_mode
      vichel_no
      dob
      doj
      status
      end_date
      last_degree
      institute
      leaves {
        items {
          id
          employee_id
          supervisor
          leave
          from
          to
          Lead_Approval
          Hr_Approval
          remarks
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      jobs {
        items {
          id
          employee_id
          organization
          start_date
          end_date
          designation
          createdAt
          updatedAt
        }
        nextToken
      }
      evaluation {
        items {
          id
          employee_id
          reviewer_name
          reviewer_title
          employee_name
          reviewing_date
          q_one
          q_two
          q_three
          q_four
          q_five
          q_six
          q_seven
          q_eight
          q_nine
          q_ten
          q_eleven
          q_twelve
          q_thirteen
          q_fourteen
          q_fifteen
          q_sixteen
          q_seventeen
          q_eighteen
          q_nineteen
          q_twenty
          q_twentyone
          q_twentytwo
          createdAt
          updatedAt
        }
        nextToken
      }
      warnings {
        items {
          id
          employee_id
          date
          type
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLeave = /* GraphQL */ `
  subscription OnCreateLeave {
    onCreateLeave {
      id
      employee_id
      supervisor
      leave
      from
      to
      Lead_Approval
      Hr_Approval
      remarks
      type
      employee {
        id
        employee_id
        employee_name
        full_name
        father_name
        cnic
        employee_addr
        employee_email
        employee_phone1
        employee_phone2
        employee_pic
        employee_salary
        role
        supervisor
        company
        blood_group
        transport_mode
        vichel_no
        dob
        doj
        status
        end_date
        last_degree
        institute
        leaves {
          nextToken
        }
        jobs {
          nextToken
        }
        evaluation {
          nextToken
        }
        warnings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLeave = /* GraphQL */ `
  subscription OnUpdateLeave {
    onUpdateLeave {
      id
      employee_id
      supervisor
      leave
      from
      to
      Lead_Approval
      Hr_Approval
      remarks
      type
      employee {
        id
        employee_id
        employee_name
        full_name
        father_name
        cnic
        employee_addr
        employee_email
        employee_phone1
        employee_phone2
        employee_pic
        employee_salary
        role
        supervisor
        company
        blood_group
        transport_mode
        vichel_no
        dob
        doj
        status
        end_date
        last_degree
        institute
        leaves {
          nextToken
        }
        jobs {
          nextToken
        }
        evaluation {
          nextToken
        }
        warnings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLeave = /* GraphQL */ `
  subscription OnDeleteLeave {
    onDeleteLeave {
      id
      employee_id
      supervisor
      leave
      from
      to
      Lead_Approval
      Hr_Approval
      remarks
      type
      employee {
        id
        employee_id
        employee_name
        full_name
        father_name
        cnic
        employee_addr
        employee_email
        employee_phone1
        employee_phone2
        employee_pic
        employee_salary
        role
        supervisor
        company
        blood_group
        transport_mode
        vichel_no
        dob
        doj
        status
        end_date
        last_degree
        institute
        leaves {
          nextToken
        }
        jobs {
          nextToken
        }
        evaluation {
          nextToken
        }
        warnings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
      id
      employee_id
      organization
      start_date
      end_date
      designation
      employee {
        id
        employee_id
        employee_name
        full_name
        father_name
        cnic
        employee_addr
        employee_email
        employee_phone1
        employee_phone2
        employee_pic
        employee_salary
        role
        supervisor
        company
        blood_group
        transport_mode
        vichel_no
        dob
        doj
        status
        end_date
        last_degree
        institute
        leaves {
          nextToken
        }
        jobs {
          nextToken
        }
        evaluation {
          nextToken
        }
        warnings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
      id
      employee_id
      organization
      start_date
      end_date
      designation
      employee {
        id
        employee_id
        employee_name
        full_name
        father_name
        cnic
        employee_addr
        employee_email
        employee_phone1
        employee_phone2
        employee_pic
        employee_salary
        role
        supervisor
        company
        blood_group
        transport_mode
        vichel_no
        dob
        doj
        status
        end_date
        last_degree
        institute
        leaves {
          nextToken
        }
        jobs {
          nextToken
        }
        evaluation {
          nextToken
        }
        warnings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
      id
      employee_id
      organization
      start_date
      end_date
      designation
      employee {
        id
        employee_id
        employee_name
        full_name
        father_name
        cnic
        employee_addr
        employee_email
        employee_phone1
        employee_phone2
        employee_pic
        employee_salary
        role
        supervisor
        company
        blood_group
        transport_mode
        vichel_no
        dob
        doj
        status
        end_date
        last_degree
        institute
        leaves {
          nextToken
        }
        jobs {
          nextToken
        }
        evaluation {
          nextToken
        }
        warnings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvaluation = /* GraphQL */ `
  subscription OnCreateEvaluation {
    onCreateEvaluation {
      id
      employee_id
      reviewer_name
      reviewer_title
      employee_name
      reviewing_date
      q_one
      q_two
      q_three
      q_four
      q_five
      q_six
      q_seven
      q_eight
      q_nine
      q_ten
      q_eleven
      q_twelve
      q_thirteen
      q_fourteen
      q_fifteen
      q_sixteen
      q_seventeen
      q_eighteen
      q_nineteen
      q_twenty
      q_twentyone
      q_twentytwo
      employee {
        id
        employee_id
        employee_name
        full_name
        father_name
        cnic
        employee_addr
        employee_email
        employee_phone1
        employee_phone2
        employee_pic
        employee_salary
        role
        supervisor
        company
        blood_group
        transport_mode
        vichel_no
        dob
        doj
        status
        end_date
        last_degree
        institute
        leaves {
          nextToken
        }
        jobs {
          nextToken
        }
        evaluation {
          nextToken
        }
        warnings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEvaluation = /* GraphQL */ `
  subscription OnUpdateEvaluation {
    onUpdateEvaluation {
      id
      employee_id
      reviewer_name
      reviewer_title
      employee_name
      reviewing_date
      q_one
      q_two
      q_three
      q_four
      q_five
      q_six
      q_seven
      q_eight
      q_nine
      q_ten
      q_eleven
      q_twelve
      q_thirteen
      q_fourteen
      q_fifteen
      q_sixteen
      q_seventeen
      q_eighteen
      q_nineteen
      q_twenty
      q_twentyone
      q_twentytwo
      employee {
        id
        employee_id
        employee_name
        full_name
        father_name
        cnic
        employee_addr
        employee_email
        employee_phone1
        employee_phone2
        employee_pic
        employee_salary
        role
        supervisor
        company
        blood_group
        transport_mode
        vichel_no
        dob
        doj
        status
        end_date
        last_degree
        institute
        leaves {
          nextToken
        }
        jobs {
          nextToken
        }
        evaluation {
          nextToken
        }
        warnings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEvaluation = /* GraphQL */ `
  subscription OnDeleteEvaluation {
    onDeleteEvaluation {
      id
      employee_id
      reviewer_name
      reviewer_title
      employee_name
      reviewing_date
      q_one
      q_two
      q_three
      q_four
      q_five
      q_six
      q_seven
      q_eight
      q_nine
      q_ten
      q_eleven
      q_twelve
      q_thirteen
      q_fourteen
      q_fifteen
      q_sixteen
      q_seventeen
      q_eighteen
      q_nineteen
      q_twenty
      q_twentyone
      q_twentytwo
      employee {
        id
        employee_id
        employee_name
        full_name
        father_name
        cnic
        employee_addr
        employee_email
        employee_phone1
        employee_phone2
        employee_pic
        employee_salary
        role
        supervisor
        company
        blood_group
        transport_mode
        vichel_no
        dob
        doj
        status
        end_date
        last_degree
        institute
        leaves {
          nextToken
        }
        jobs {
          nextToken
        }
        evaluation {
          nextToken
        }
        warnings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWarning = /* GraphQL */ `
  subscription OnCreateWarning {
    onCreateWarning {
      id
      employee_id
      date
      type
      description
      employee {
        id
        employee_id
        employee_name
        full_name
        father_name
        cnic
        employee_addr
        employee_email
        employee_phone1
        employee_phone2
        employee_pic
        employee_salary
        role
        supervisor
        company
        blood_group
        transport_mode
        vichel_no
        dob
        doj
        status
        end_date
        last_degree
        institute
        leaves {
          nextToken
        }
        jobs {
          nextToken
        }
        evaluation {
          nextToken
        }
        warnings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWarning = /* GraphQL */ `
  subscription OnUpdateWarning {
    onUpdateWarning {
      id
      employee_id
      date
      type
      description
      employee {
        id
        employee_id
        employee_name
        full_name
        father_name
        cnic
        employee_addr
        employee_email
        employee_phone1
        employee_phone2
        employee_pic
        employee_salary
        role
        supervisor
        company
        blood_group
        transport_mode
        vichel_no
        dob
        doj
        status
        end_date
        last_degree
        institute
        leaves {
          nextToken
        }
        jobs {
          nextToken
        }
        evaluation {
          nextToken
        }
        warnings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWarning = /* GraphQL */ `
  subscription OnDeleteWarning {
    onDeleteWarning {
      id
      employee_id
      date
      type
      description
      employee {
        id
        employee_id
        employee_name
        full_name
        father_name
        cnic
        employee_addr
        employee_email
        employee_phone1
        employee_phone2
        employee_pic
        employee_salary
        role
        supervisor
        company
        blood_group
        transport_mode
        vichel_no
        dob
        doj
        status
        end_date
        last_degree
        institute
        leaves {
          nextToken
        }
        jobs {
          nextToken
        }
        evaluation {
          nextToken
        }
        warnings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
