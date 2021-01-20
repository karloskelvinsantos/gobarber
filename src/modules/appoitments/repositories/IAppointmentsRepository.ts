import Appointment from "../infra/typeorm/entities/Appointment";

import ICreateAppointmentDTO from "../dtos/ICreateAppointmentDTO";

interface IAppointmentsRepository {
  find(): Promise<Appointment[]>;
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}

export default IAppointmentsRepository;