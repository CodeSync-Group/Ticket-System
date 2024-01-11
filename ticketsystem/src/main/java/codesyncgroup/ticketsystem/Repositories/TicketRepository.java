package codesyncgroup.ticketsystem.Repositories;

import codesyncgroup.ticketsystem.Entities.TicketEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends CrudRepository<TicketEntity, Long> {
}
