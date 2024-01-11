package codesyncgroup.ticketsystem.Repositories;

import codesyncgroup.ticketsystem.Entities.CategoryEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends CrudRepository<CategoryEntity, Long> {

}
